import DashboardLayout from "../../components/layouts/DashboardLayout";

function UserProfile() {
  return (
    <DashboardLayout>
      <div className="bg-white overflow-hidiven shadow rounded-lg border">
        <div className="px-4 py-5 sm:px-6">
          <div className="text-lg leading-6 font-bold text-gray-900">
            User Profile
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="text-sm font-medium text-gray-500">Full name</div>
              <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                John Doe
              </div>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="text-sm font-medium text-gray-500">
                Email address
              </div>
              <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                johndoe@gmail.com
              </div>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="text-sm font-medium text-gray-500">
                Phone number
              </div>
              <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                (+91) 8062062707
              </div>
            </div>
            <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <div className="text-sm font-medium text-gray-500">Address</div>
              <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                123 Main St Anytown, USA 12345
              </div>
            </div>
          </dl>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default UserProfile;
