export default function Services() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
      <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            We offer a wide range of plumbing services to meet your needs. Let us help you with your next project or
            repair.
          </p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2">
          <li>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Pipe Repair</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We can fix leaks and repair damaged pipes to ensure your plumbing system is working properly.
              </p>
            </div>
          </li>
          <li>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Drain Cleaning</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Let us clear clogs and remove debris from your drains to prevent backups and keep your pipes flowing
                smoothly.
              </p>
            </div>
          </li>
          <li>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Water Heater Installation</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Upgrade to a new water heater with our professional installation services. Enjoy hot water on
                demand.
              </p>
            </div>
          </li>
          <li>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Fixture Replacement</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Update your kitchen or bathroom with new fixtures. We can install faucets, showers, and more.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
