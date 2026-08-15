"use client";

import {
  ReactNode,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { getStoredUser } from "@/lib/auth";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({
  children,
}: ProtectedRouteProps) {
  const router = useRouter();

  const [isCheckingAuth, setIsCheckingAuth] =
    useState(true);

  const [isAuthenticated, setIsAuthenticated] =
    useState(false);

  useEffect(() => {
    const checkAuthentication = () => {
      const user = getStoredUser();

      if (!user) {
        setIsAuthenticated(false);
        setIsCheckingAuth(false);

        router.replace("/login");

        return;
      }

      setIsAuthenticated(true);
      setIsCheckingAuth(false);
    };

    checkAuthentication();
  }, [router]);

  // Authentication check
  if (isCheckingAuth) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

          <p className="text-sm text-gray-500">
            Checking authentication...
          </p>
        </div>
      </div>
    );
  }

  // Not authenticated
  if (!isAuthenticated) {
    return null;
  }

  // Authenticated
  return <>{children}</>;
}