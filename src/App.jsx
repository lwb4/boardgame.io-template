const App = () => (
  <Router>
    <main>
      <aside className="sidebar">
        <div className="sidebar-nav" style={{ height: '90%' }}>
          <ul>
            {routes.map((route_category, idx) => (
              <li key={idx}>
                <p>{route_category.name}</p>
                <ul>
                  {route_category.routes.map((route, _idx) => (
                    <LiNavLink
                      key={`${idx}.${_idx}`}
                      to={route.path}
                      exact={true}
                      activeClassName="active"
                    >
                      {route.text}
                    </LiNavLink>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <section className="content">
        {_.flattenDeep(routes.map((route) => route.routes)).map(
          (route, idx) => (
            <Route
              key={idx}
              exact
              path={route.path}
              component={route.component}
            />
          )
        )}
      </section>
    </main>
  </Router>
);