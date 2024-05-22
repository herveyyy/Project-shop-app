import { UserNavbar } from "@/components/UserNavbar";
import LandingPage from "@/pages/LandingPage";
export default function Home() {
  return (
    <div className="">
      <div className=" fixed  w-full pt-2 md:pt-4  px-4 md:px-0 z-50">
        <UserNavbar />
      </div>
      <div className="">
        <LandingPage />
      </div>
    </div>
  );
}
