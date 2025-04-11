{<div className="App container">
    <Dropdown>
  <Dropdown.Toggle variant="dark" id="dropdown-basic" alignRight
    title="Dropdown right"
   id="dropdown-menu-align-right"
   onSelect={selecthandler}
    name={status}
    dropdownvalue = {status}>
    Status
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item eventKey="Available">Available</Dropdown.Item>
    <Dropdown.Item >Not Available</Dropdown.Item>
    <Dropdown.Item>Exploring the application</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<h4>You selected {dropdownvalue}</h4>
     </div>}

<Fragment>
<br>
</br>
<Row className="justify-content-md-center">
<Col xs={3} md={4}>
<Card style={{width:'25rem'}}className="text-center">
<Card.Header><strong><h6>Company:</h6></strong>{CompanyName}</Card.Header>
<Card.Body style={{backgroundColor:""}}>
<Card.Title><strong>Job: </strong>{jobtitle}</Card.Title>
<Card.Text style={{color:"#606060"}}>
{jobdescription}
</Card.Text>
<Card.Text>
<Card.Text>
Skills Required: 
</Card.Text>
{skillsetreq.map((skillsetreq, index) =>(
<div>
<Row>
<Col>
<i /><FiCheckSquare />{' '}{skillsetreq}
</Col> 
</Row>
</div>
))}
</Card.Text>
<Card.Text>
<GiMoneyStack />{' '}{jobbudget}
</Card.Text>
<Card.Text>
<BsFillClockFill />{' '}{jobduration}
</Card.Text>
<Button onClick = {addInterested(_id)} variant="success">
Interested <Badge bg="secondary">
<span>{interested.length > 0 && <span >{interested.length}</span>}</span></Badge>
</Button>
</Card.Body>
<Card.Footer className="text-muted"><BsFillGeoFill />{' '}{Location}
<br>
</br>
<div><p>Posted On: <Moment format='DD/MM/YYYY'>{date}</Moment></p></div>
</Card.Footer>
</Card>
</Col>
</Row>
</Fragment>

);