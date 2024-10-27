import { LogoutIcon } from "../icons"; // Update this path to where LogoutIcon is defined

const Sidebar = ({ userRole }) => {
  const logOut = async () => {
    try {
      const response = await fetch("/LogOut", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        window.location.replace("/SignIn");
      } else {
        console.error("Failed to log out");
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white ">
      <div className="flex items-center justify-center h-16 border-b border-gray-700">
        <h2 className="text-lg font-bold">IntraManage</h2>
      </div>
      <div className="flex-grow overflow-y-auto">
        <nav className="p-4 space-y-2">
          {userRole.toLowerCase() === "administrador" && (
            <>
              <a
                href="/employees"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Employees
              </a>
              <a
                href="/departments"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Departments
              </a>
              <a
                href="/roles"
                className="block py-2 px-4 rounded hover:bg-gray-700"
              >
                Roles
              </a>
            </>
          )}
          <a
            href="/myInfo"
            className="block py-2 px-4 rounded hover:bg-gray-700"
          >
            My Information
          </a>
        </nav>
      </div>
      <div className="flex items-center justify-between p-4 border-t border-gray-700">
        <span className="text-sm mx-4">{userRole}</span>
        <button
          onClick={logOut}
          className="flex w-28 items-center text-sm bg-red-600 px-3 py-1 ml-2 rounded hover:bg-red-700 transition"
        >
          <LogoutIcon className="text-white" />
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
