import React, { Component } from 'react';
import LinkList from './linkList';

class ComponentList extends Component {
  render() {
    return (
      <div className="page-wrapper">
        <div class="div-table">
          <header>
            <div class="div-table-navigation">
              <div class="left-navigation">
                <strong>Hacker news</strong>
                <a href="#" class="navigation-anchor">
                  new
                </a>
                |
                <a href="#" class="navigation-anchor">
                  past
                </a>
                |
                <a href="#" class="navigation-anchor">
                  commets
                </a>
                |
                <a href="#" class="navigation-anchor">
                  ask
                </a>
                |
                <a href="#" class="navigation-anchor">
                  show
                </a>
                |
                <a href="#" class="navigation-anchor">
                  jobs
                </a>
                |
                <a href="#" class="navigation-anchor">
                  submit
                </a>
              </div>
              <div class="right-navigation">
                <a href="#" class="navigation-anchor">
                  login
                </a>
              </div>
            </div>
          </header>
          <LinkList></LinkList>
          <footer>
            <div class="copyright">
              <p>
                Registration is open for Startup School 2019. Classes start July
                22nd.
              </p>
            </div>
            <div class="footer-navigation">
              <p>
                Guidelines | FAQ | Support | API | Security | Lists |
                Bookmarklet | Legal | Apply to YC | Contact
              </p>
            </div>
            <div class="">
              {/* Search component goes in here */}
              <p>Search</p>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default ComponentList;
