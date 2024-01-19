# Portfolio-Website
Website with my professional information and portfolio


/* Modal styles */
.modal {
    display: none; 
    position: fixed;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%); /* Centers the modal */
    border-radius: 20px;
    border: 1px solid #888;
    width: 60%; /* Set a specific width */
    height: 70%; /* Set a specific height */
    background-color: white;
    overflow-y: auto; /* Enables scrolling for overflow content */
  }
  
  .modal-content {
    background-color: #fefefe;
    color:#555;
    margin: auto; /* Center content horizontally and vertically */
    font-size: 14px;
    padding: 20px;
    width: 100%; /* Width relative to the modal */
    height: auto; /* Height adjusts to content */
    overflow-y: auto; /* Scroll if content exceeds the height */
  }
  .modal-content h3,p strong{
    color: black;
  }

  h3.modal-item{
    color: #555;
  }
  
  .modal-item{
    margin: 5px;
  }
  
  /* Close button */
  .close {
	color: #aaa;
	float: right;
	font-size: 28px;
	font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
	color: black;
	text-decoration: none;
	cursor: pointer;
  }
  