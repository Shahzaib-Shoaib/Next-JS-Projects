import MainNavigation from "./MainNavigation";
function Layout(props : any) {
  return (
    <div>
      <MainNavigation />
      <main className= ''>{props.children}</main>
    </div>
  );
}

export default Layout;