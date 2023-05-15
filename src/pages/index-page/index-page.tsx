import Pagination from '../../components/pagination/pagination';
import './index-page.css';


function IndexPage(): JSX.Element {
  return (
    <div className="wrapper">
      <header className="header" />

      <main>
        <div className="container">
          <Pagination />
        </div>
      </main>

      <footer className="footer" />
    </div>
  );
}

export default IndexPage;
