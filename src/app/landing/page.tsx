export default function Landing() {
    return (
    <div className="flex h-screen flex-col justify-center items-center">
      <div className="flex items-center justify-center mb-6">
        <span className="text-grad text-3xl font-medium">Welcome back, Ayoub.</span>
      </div>
      <a href="/auth">
        <button className="btn-grad rounded-3xl p-4 w-36">
          <div className="flex items-center justify-center">
            <span className="text-xl font-medium">Sign in</span>
          </div>
        </button>
      </a>
    </div>
    )
  }