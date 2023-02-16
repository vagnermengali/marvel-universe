import CardList from "../../components/Card";
import Layout from "../../components/Layout";
import PaginationCard from "../../components/Pagination";

const Dashboard = () => {

    return (
        <Layout>
            <CardList />
            <PaginationCard/>
        </Layout>
    )
}

export default Dashboard;