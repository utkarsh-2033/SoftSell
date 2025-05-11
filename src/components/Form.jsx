export default function Form({ formData, setFormData, handleSubmit }) {
    return (
      <div className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Get Started Today
          </h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium mb-2"
                >
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="licenseType"
                  className="block text-sm font-medium mb-2"
                >
                  License Type *
                </label>
                <select
                  id="licenseType"
                  value={formData.licenseType}
                  onChange={(e) =>
                    setFormData({ ...formData, licenseType: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                  required
                >
                  <option value="">Select a license type</option>
                  <option value="microsoft">Microsoft</option>
                  <option value="adobe">Adobe</option>
                  <option value="autodesk">Autodesk</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
                />
              </div>
              <button
                type="submit"
                className="
                   items-center
                    px-5 py-2.5
                    rounded-md font-medium
                    bg-gray-200 text-gray-900
                    hover:bg-gray-300
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                    transition-colors duration-200
                    dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:focus:ring-gray-500
                    w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  