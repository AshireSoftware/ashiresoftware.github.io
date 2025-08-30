function OSHero() {
  return (
    <>
      <section class="bg-[#292929] py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            A Clean, Beginner-Friendly Computing Experience
          </h2>
          <p class="text-lg mb-8">
            Powered by a custom Qt Quick / Qt6 desktop environment, designed for
            simplicity and elegance.
          </p>
          <a
            href="#download"
            class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Get Started
          </a>
        </div>
      </section>

      <section id="features" class="bg-[#1e1e1e] max-w-7xl mx-auto px-4 py-16">
        <h3 class="text-3xl font-semibold text-center mb-12">Features</h3>
        <div class="grid md:grid-cols-3 gap-8 text-center">
          <div class="bg-[#292929] p-6 rounded-lg shadow hover:shadow-lg transition">
            <div class="text-orange-500 mb-4">
              <svg
                class="mx-auto h-12 w-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z" />
              </svg>
            </div>
            <h4 class="text-xl font-semibold mb-2">Intuitive Desktop</h4>
            <p class="text-gray-300">
              A sleek Qt Quick / Qt6 environment crafted for easy navigation.
            </p>
          </div>
          <div class="bg-[#292929] p-6 rounded-lg shadow hover:shadow-lg transition">
            <div class="text-orange-500 mb-4">
              <svg
                class="mx-auto h-12 w-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
              </svg>
            </div>
            <h4 class="text-xl font-semibold mb-2">Beginner Friendly</h4>
            <p class="text-gray-300">
              Designed for newcomers with straightforward setup and user-centric
              tools.
            </p>
          </div>
          <div class="bg-[#292929] p-6 rounded-lg shadow hover:shadow-lg transition">
            <div class="text-orange-500 mb-4">
              <svg
                class="mx-auto h-12 w-12"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 7V3L8 7l4 4V9c3.86 0 7 3.14 7 7 0 3.86-3.14 7-7 7s-7-3.14-7-7h-2c0 4.97 4.03 9 9 9s9-4.03 9-9-4.03-9-9-9z" />
              </svg>
            </div>
            <h4 class="text-xl font-semibold mb-2">
              Custom Desktop Environment
            </h4>
            <p class="text-gray-300">
              Experience a unique, optimized interface built with Qt6 for
              performance and style.
            </p>
          </div>
        </div>
      </section>

      <section id="showcase" class="bg-[#292929] py-16">
        <div class="max-w-7xl mx-auto px-4 text-center">
          <h3 class="text-3xl font-semibold mb-8">AshireOS in Action</h3>
          <img
            src="src/assets/desktop.png"
            alt="AshireOS Showcase"
            class="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section
        id="download"
        class="bg-[#1e1e1e] max-w-7xl mx-auto px-4 py-16 text-center"
      >
        <h3 class="text-3xl font-semibold mb-8">Download AshireOS</h3>
        <p class="mb-6 text-gray-300">
          Click below to download the latest version.
        </p>
        <a
          href="https://github.com/AshireSoftware/AshireOS/releases/download/preview/AshireOS-Preview-amd64.iso"
          class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition text-xl"
        >
          Download Now
        </a>
      </section>
    </>
  );
}

export default OSHero;
