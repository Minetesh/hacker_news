import React, { Component } from 'react';
import Vote from './Vote';

class LinkList extends Component {
  render() {
    return (
      <div>
        <div class="div-table-row">
          <div class="div-table-col">
            <span>1.</span>
          </div>
          <div class="div-table-col">
            <Vote></Vote>
          </div>
          <div class="div-table-col">Here it goes the title</div>
          <div class="div-table-col">
            {' '}
            <a href="#" class="site-url">
              (Site URL)
            </a>
          </div>
        </div>
        <div class="div-table-subtext div-table-row" align="left">
          <span class="">97 points</span>
          <a hre f="#">
            by user
          </a>
          <span class="">4 hours </span>|<span class=""> status </span>|
          <a href="#" class="site-url">
            {' '}
            2 Comments
          </a>
        </div>
        <div class="div-table-row pagination-wrapper" align="left">
          <a href="#" class="pagination">
            More
          </a>
        </div>
        <div class="div-table-row">
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default LinkList;
