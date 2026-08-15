export const AUTH_STORAGE_KEY = "hisabdo_auth";
export const USERS_STORAGE_KEY = "hisabdo_users";

export type AuthUser = {
  name: string;
  email: string;
};

type StoredUser = AuthUser & {
  password: string;
};

export function getStoredUser(): AuthUser | null {
  if (typeof window === "undefined") {
    return null;
  }

  const storedUser = localStorage.getItem(
    AUTH_STORAGE_KEY
  );

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser) as AuthUser;
  } catch {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

function getStoredUsers(): StoredUser[] {
  if (typeof window === "undefined") {
    return [];
  }

  const storedUsers = localStorage.getItem(
    USERS_STORAGE_KEY
  );

  if (!storedUsers) {
    return [];
  }

  try {
    return JSON.parse(storedUsers) as StoredUser[];
  } catch {
    localStorage.removeItem(USERS_STORAGE_KEY);
    return [];
  }
}

function saveStoredUsers(users: StoredUser[]) {
  localStorage.setItem(
    USERS_STORAGE_KEY,
    JSON.stringify(users)
  );
}

export function registerUser(
  name: string,
  email: string,
  password: string
): {
  success: boolean;
  message?: string;
} {
  const users = getStoredUsers();

  const normalizedEmail =
    email.trim().toLowerCase();

  const existingUser = users.find(
    (user) =>
      user.email.toLowerCase() ===
      normalizedEmail
  );

  if (existingUser) {
    return {
      success: false,
      message:
        "An account with this email already exists.",
    };
  }

  const newUser: StoredUser = {
    name: name.trim(),
    email: normalizedEmail,
    password,
  };

  saveStoredUsers([
    ...users,
    newUser,
  ]);

  saveUser({
    name: newUser.name,
    email: newUser.email,
  });

  return {
    success: true,
  };
}

export function loginUser(
  email: string,
  password: string
): {
  success: boolean;
  message?: string;
} {
  const users = getStoredUsers();

  const normalizedEmail =
    email.trim().toLowerCase();

  const user = users.find(
    (storedUser) =>
      storedUser.email.toLowerCase() ===
        normalizedEmail &&
      storedUser.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  saveUser({
    name: user.name,
    email: user.email,
  });

  return {
    success: true,
  };
}

export function saveUser(user: AuthUser) {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(
    AUTH_STORAGE_KEY,
    JSON.stringify(user)
  );
}

export function clearUser() {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function isAuthenticated(): boolean {
  return getStoredUser() !== null;
}