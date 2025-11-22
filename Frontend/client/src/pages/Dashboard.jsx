import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import useAuthStore from "../useAuthStore";
import Profile from "../components/Profile";
import ProgressBar from "../components/ProgressBar";

export default function Dashboard() {
  const { user } = useAuthStore();

  if (!user) return <p className="text-center mt-10">Loading user...</p>;

  return (
    <>
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>
        <Profile user={user} />
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Your Learning Progress</h3>
          <ProgressBar progress={60} />
        </div>
      </div>
      <Footer />
    </>
  );
}
