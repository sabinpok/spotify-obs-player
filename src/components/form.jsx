export default function Form({
  handleUserInfoSubmit,
  newUserInfo,
  handleUserInfoChange,
}) {
  return (
    <form onSubmit={handleUserInfoSubmit}>
      <input value={newUserInfo} onChange={handleUserInfoChange} />
      <button type="submit">search</button>
    </form>
  );
}
