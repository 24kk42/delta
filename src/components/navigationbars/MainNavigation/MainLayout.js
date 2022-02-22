import classes from './MainLayout.module.css';
import MainNavigationBar from './MainNavigationBar';

function MainLayout(props) {
    return (
      <div>
        <MainNavigationBar />
        <main className={classes.main}>{props.children}</main>
      </div>
    );
  }
  
  export default MainLayout;