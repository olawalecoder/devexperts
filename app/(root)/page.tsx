import {auth, signOut} from "@/auth";
import ROUTES from "@/constants/routes";
import {Button} from "@/components/ui/button";

const Home = async () => {
    const session = await auth()
    console.log(session)
  return (
      <>
          <h1 className="h1-bold">
              Welcome to DevExperts
          </h1>
          <h1 className="text-5xl font-space-grotesk">
              Welcome to DevExperts
          </h1>
      </>
  );
}

export default Home;
