import { useNavigate } from "react-router";

function AdminPage() {
    const navigation = useNavigate();
    function LogoutButton(){
        navigation("/");
        }


  return (
    <div>
      <button onClick={LogoutButton}>Logout</button>
    </div>
  );
}

export default AdminPage;
