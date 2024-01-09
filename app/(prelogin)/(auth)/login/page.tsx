export default function LoginPage() {
  return (
    <div className="p-5 border rounded flex flex-col gap-3">
      <h1 className="text-2xl font-bold">Login</h1>
      <div className="flex flex-col">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input type="email" id="email" className="border rounded" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm">
          Password
        </label>
        <input type="password" id="password" className="border rounded" />
      </div>
      <div className="flex flex-col gap-3">
        <button className="border rounded px-5 py-1 border-gray-500">
          Login
        </button>
      </div>
    </div>
  );
}
