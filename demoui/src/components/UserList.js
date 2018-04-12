import React from 'react';
import  UserTable from './User'
import axios from 'axios'
import{ Link } from 'react-router-dom';

export default class UserList extends React.Component{

    render(){
        const {users, selectedUsers} = this.props
        var paddingDiv = {
          'padding':'35px'
        }
        return (
          <div style={paddingDiv}>
            <div class="bx--data-table-v2-container" data-table-v2>
            <h4 class="bx--data-table-v2-header">User Listing</h4>
            <section class="bx--table-toolbar">
              <div class="bx--batch-actions" aria-label="Table Action Bar">
                <div class="bx--action-list">
                  <button class="bx--btn bx--btn--sm " type="button">
                    Ghost
                    <svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
                      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H9v3H7V9H4V7h3V4h2v3h3v2z"></path>
                    </svg>
                  </button>

                  <button class="bx--btn bx--btn--sm bx--btn--ghost" type="button">
                    Ghost
                    <svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
                      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H9v3H7V9H4V7h3V4h2v3h3v2z"></path>
                    </svg>
                  </button>

                  <button class="bx--btn bx--btn--sm bx--btn--ghost" type="button">
                    Ghost
                    <svg class="bx--btn__icon" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
                      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H9v3H7V9H4V7h3V4h2v3h3v2z"></path>
                    </svg>
                  </button>
                </div>
                <div class="bx--batch-summary">
                  <p class="bx--batch-summary__para">
                    <span data-items-selected>3</span> items selected</p>
                  <button data-event="action-bar-cancel" class="bx--batch-summary__cancel">Cancel</button>
                </div>
              </div>

              <div class="bx--toolbar-search-container">
                <div data-search class="bx--search bx--search--sm" role="search">
                  <svg class="bx--search-magnifier" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
                    <path d="M6 2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm0-2C2.7 0 0 2.7 0 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zM16 13.8L13.8 16l-3.6-3.6 2.2-2.2z"></path>
                    <path d="M16 13.8L13.8 16l-3.6-3.6 2.2-2.2z"></path>
                  </svg>
                  <label id="search-input-label-10" class="bx--label" for="search__input-10">Filter table</label>
                  <input class="bx--search-input" type="text" id="search__input-10" role="search" placeholder="Search" aria-labelledby="search-input-label-10" onChange={this.props.search}/>
                  <svg class="bx--search-close bx--search-close--hidden" width="10" height="10" viewBox="0 0 10 10" fill-rule="evenodd">
                    <path d="M9.8 8.6L8.4 10 5 6.4 1.4 10 0 8.6 3.6 5 .1 1.4 1.5 0 5 3.6 8.6 0 10 1.4 6.4 5z"></path>
                  </svg>
                </div>
              </div>

              <div class="bx--toolbar-content">
                <button class="bx--toolbar-action">
                  <svg class="bx--toolbar-action__icon" width="16" height="16" viewBox="-1 2 16 16">
                    <path d="M8 9V2H6.1v7L3.5 6.5 2 8l5 5 5-5-1.5-1.5L8 9z" />
                    <path d="M13 12v3H1v-3h-2v6h16v-6h-2z" />
                  </svg>
                </button>

                <button class="bx--toolbar-action">
                  <svg class="bx--toolbar-action__icon" width="16" height="16" viewBox="0 0 16 16" fill-rule="evenodd">
                    <path d="M2.032 10.924l7.99-7.99 2.97 2.97-7.99 7.99zM11.046 2.014l1.98-1.98 2.97 2.97-1.98 1.98zM0 16l3-1-2-2z"></path>
                  </svg>
                </button>

                <button class="bx--toolbar-action">
                  <svg class="bx--toolbar-action__icon" width="16" height="16" viewBox="-1 2 16 16">
                    <path d="M13.1 10c0-.3 0-.6-.1-1l2-1.7-1.7-2.7-2.3.8c-.6-.5-1.2-.9-1.9-1.1L8.6 2H5.4l-.5 2.2c-.7.3-1.4.7-1.9 1.2L.7 4.6-1 7.3.9 9c0 .3-.1.6-.1 1s0 .6.1 1L-1 12.7l1.7 2.7 2.3-.8c.6.5 1.2.9 1.9 1.1l.5 2.3h3.2l.5-2.2c.7-.3 1.3-.6 1.9-1.1l2.3.8 1.7-2.7-1.9-1.8v-1zM7 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                    />
                  </svg>
                </button>
                <Link to = '/adduser' class="bx--btn bx--btn--sm bx--btn--primary"> Add New </Link>
                  {/* <button class="bx--btn bx--btn--sm bx--btn--primary">Add new</button> */}
                {/* </Link> */}
              </div>
            </section>
            <div class="row"><
                button class="bx--btn bx--btn--sm bx--btn--primary" onClick={()=>{this.props.editUser('activate')}}>Activate</button>
                <button class="bx--btn bx--btn--sm bx--btn--primary" onClick={()=>{this.props.editUser('deactivate')}}>Deactivate</button>
                <button class="bx--btn bx--btn--sm bx--btn--primary" onClick={()=>{this.props.editUser('delete')}}>Delete</button>
              </div>
            <table class="bx--data-table-v2 bx--data-table-v2--zebra">
              <thead>
                <tr>
                  <th>
                    <input data-event="select-all" id="bx--checkbox-20" class="bx--checkbox" type="checkbox" value="green" name="checkbox-20"/>
                    <label for="bx--checkbox-20" class="bx--checkbox-label" aria-label="Label name"></label>
                  </th>
                  <th>
                    <button class="bx--table-sort-v2" data-event="sort">
                      <span class="bx--table-header-label">Name</span>
                      <svg class="bx--table-sort-v2__icon" width='10' height='5' viewBox='0 0 10 5' fill-rule='evenodd'>
                        <path d='M10 0L5 5 0 0z'></path>
                      </svg>
                    </button>
                  </th>
                  <th>
                    <button class="bx--table-sort-v2" data-event="sort">
                      <span>Username</span>
                      <svg class="bx--table-sort-v2__icon" width='10' height='5' viewBox='0 0 10 5' fill-rule='evenodd'>
                        <path d='M10 0L5 5 0 0z'></path>
                      </svg>
                    </button>
                  </th>
                  <th>
                    <button class="bx--table-sort-v2" data-event="sort">
                      <span>Superuser</span>
                      <svg class="bx--table-sort-v2__icon" width='10' height='5' viewBox='0 0 10 5' fill-rule='evenodd'>
                        <path d='M10 0L5 5 0 0z'></path>
                      </svg>
                    </button>
                  </th>
                  <th>
                    <button class="bx--table-sort-v2" data-event="sort">
                      <span>Staff</span>
                      <svg class="bx--table-sort-v2__icon" width='10' height='5' viewBox='0 0 10 5' fill-rule='evenodd'>
                        <path d='M10 0L5 5 0 0z'></path>
                      </svg>
                    </button>
                  </th>
                  <th>
                    <button class="bx--table-sort-v2" data-event="sort">
                      <span>Active</span>
                      <svg class="bx--table-sort-v2__icon" width='10' height='5' viewBox='0 0 10 5' fill-rule='evenodd'>
                        <path d='M10 0L5 5 0 0z'></path>
                      </svg>
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map(user => (
                    // <UserTable key={user.id} user={user} selUsers={() => selectedUsers(user)}/>
                    <UserTable key={user.id} user={user} selUsers={()=>selectedUsers(user.id)}/>
                    
                  )
                )
              }
              </tbody>
          </table>
        </div>
      </div>
    )
    };

}
