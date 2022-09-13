import axios from "axios";


export const pushNoti = async (data: { title: string, content: string}) => {

	const { status } = await axios.post(`https://onesignal.com/api/v1/notifications`, {
    "app_id": "86273b1f-c191-4744-8452-dcd35e049a97",
    "included_segments": ["Subscribed Users"], 
    "headings": {"en": data.title}, 
    "contents": {"en": data.content}  
  },
  {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic NDA4MGM5ODAtNGQ0Yi00YzNiLWFjODctNGNjMjgyMDBmOWQw'
    }
  }
  );
  
  

	return status;
};