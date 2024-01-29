import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";

const HomePage = async () => {
  const billboard = await getBillboard("67b956e2-7120-41c3-9802-0e1d77a44b56");
 
  return (
    <Container>
      <div className="space-y-10 pb-10 ">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
