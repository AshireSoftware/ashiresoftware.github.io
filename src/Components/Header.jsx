function Header() {
  return (
    <>
      <header class="bg-[#1e1e1e] shadow-md">
        <div class="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 class="text-2xl font-bold">AshireOS</h1>
          <nav class="space-x-6">
            <a href="#features" class="hover:text-orange-500">
              Features
            </a>
            <a href="#showcase" class="hover:text-orange-500">
              Showcase
            </a>
            <a
              href="#download"
              class="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
            >
              Download
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
