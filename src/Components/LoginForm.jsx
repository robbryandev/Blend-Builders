export default function LoginForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <form className="p-6 space-y-4 text-center text-white rounded-lg bg-secondary" onSubmit={handleSubmit}>
            <label className="block">
                Email
                <input className="ml-4 rounded-md shadow-md" type="email" name="email" id="email" />
            </label>
            <label className="block">
                Password
                <input className="ml-4 rounded-md shadow-md" type="password" name="password" id="password" />
            </label>
            <button className="px-2 py-1 rounded-md bg-primary" type="submit">Login</button>
        </form>
    )
}