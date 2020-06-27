import React from 'react';
import { MDBFooter, MDBIcon, MDBContainer } from 'mdbreact';
import { Fab } from '@material-ui/core';

export default function Footer () {
    return (
        <MDBFooter
            color='stylish-color-dark'
            className='page-footer font-small pt-4 mt-0'
        >
        <div className='text-center pt-5'>
            <ul className='list-unstyled list-inline'>
              <li className='list-inline-item'>
              <Fab size="small" color="default" aria-label="edit" className="blue darken-3">
                <a href='#!' >
                  <MDBIcon fab icon="facebook" size="lg"/>
                </a>
              </Fab>
              </li>
              <li className='list-inline-item'>
              <Fab size="small" color="secondary" aria-label="edit" className="">
                <a href='#!' >
                  <MDBIcon fab icon="instagram" size="lg"/>
                </a>
              </Fab>
              </li>
              <li className='list-inline-item'>
              <Fab size="small" color="secondary" aria-label="edit" className="blue lighter-3">
                <a href='#!' >
                  <MDBIcon fab icon="twitter" size="lg"/>
                </a>
              </Fab>
              </li>
              <li className='list-inline-item'>
              <Fab size="small" color="secondary" aria-label="edit" className="red darken-2">
                <a href='#!' >
                  <MDBIcon fab icon="youtube" size="lg"/>
                </a>
              </Fab>
              </li>
            </ul>
        </div>
        <div className='footer-copyright text-center py-3'>
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{' '}
            <a href='/'> SizeEpedia.com </a>
          </MDBContainer>
        </div>
        </MDBFooter>
    )
}