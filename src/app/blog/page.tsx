export default function BlogPage() {
  return (
    <div className="px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
        Nimble Chat Blog
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Insights, updates, and success stories to help you grow smarter with AI.
      </p>

      <div className="space-y-10">
        <div className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-2">How AI Chat is Changing Local Businesses</h2>
          <p className="text-gray-700 mb-2">
            Discover how small businesses are using AI assistants to boost conversions and save time.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Read more →
          </a>
        </div>

        <div className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-2">5 Ways to Use Nimble Chat Beyond Support</h2>
          <p className="text-gray-700 mb-2">
            From lead generation to document collection — see how clients are using Nimble Chat creatively.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Read more →
          </a>
        </div>

        <div className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-2">New Feature: Multi-Assistant Workflows</h2>
          <p className="text-gray-700 mb-2">
            Our latest update allows you to assign different assistants to unique roles within your team.
          </p>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
}
