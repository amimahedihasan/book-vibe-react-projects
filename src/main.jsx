import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './routs/routs';

import BookCard from './Components/HomePage/UI/BookCard';
import BookProiveder from './BookContest/BookContest';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BookProiveder>

      <RouterProvider router={router} />
   </BookProiveder>

  
  </StrictMode>,
)
