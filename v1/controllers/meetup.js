import meetupdb from '../models/meetupdb';

class MeetupsController { 
  createMeetup(req, res) {
    if (!req.body.title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    } else if (!req.body.description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    } else if(!req.body.happeningOn) {
  	return res.status(400).send({
  		success: 'false',
  		message: 'Date is required'
  	})
  } else if(!req.body.location) {
  	return res.status(400).send({
  		success: 'false',
  		message: 'loction is required'
  	})
  }
    const meetup = {
      id: meetupdb.length + 1,
      title: req.body.title,
      description: req.body.description,
      happeningOn: req.body.happeningOn,
      location: req.body.location
    };
    meetupdb.push(meetup);
    return res.status(201).send({
      success: 'true',
      message: 'meetup added successfully',
      meetup,
    });
  }

  getAllMeetups(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'meetup retrieved successfully',
      meetup: db,
    });
  }

   getOneMeetup(req, res) {
    const id = parseInt(req.params.id, 10);
    db.map((meetup) => {
      if (meetup.id === id) {
        return res.status(200).send({
          success: 'true',
          message: 'meetup retrieved successfully',
          meetup,
        });
      }
    });
    return res.status(404).send({
      success: 'false',
      message: 'meetup does not exist',
    });
  }
  
}


const meetupController = new MeetupsController();
export default meetupController;