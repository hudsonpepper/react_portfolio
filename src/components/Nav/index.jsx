// Bringing in the required import from 'react-router-dom'
import { Link } from 'react-router-dom';
import Navbar from '../UI/Navbar';
import './style.css';

export default function Nav() {
  // The Navbar UI component will render each of the Link elements in the links prop
  return (<>
    <div id="top">
      <Navbar />
    </div>
  </>
  );
}
