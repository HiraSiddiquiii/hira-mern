function Filter({ course, setCourse }) {
  return (
    <select value={course} onChange={(e) => setCourse(e.target.value)}>
      <option value="">All Courses</option>
      <option value="Web Development">Web Development</option>
      <option value="Graphic Design">Graphic Design</option>
    </select>
  );
}

export default Filter;