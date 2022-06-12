import { useEffect, useState } from 'react';
import api from './services/api';
import './App.css';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

function App() {
  // const [ticketsList, setTicketsList] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const { data } = await api.get('/tickets');
  //     console.log(data);
  //     setTicketsList(data);
  //   }
  //   fetchData();
  // }, []);

  // console.log('FORAAA222', ticketsList);

  const TableTest = [
    {
      ticketCreatedAt: '2022-06-12T04:56:32.034Z',
      ticketName: 'Bespoke Granite Gloves',
      ticketAvatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/670.jpg',
      ticketType: false,
      ticketPrice: '395.00',
      ticketAvailable: 34254,
      ticketDescription:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      ticketCity: 'Goodyear',
      ticketData: '2090-01-13T13:27:01.627Z',
      ticketOnline: true,
      ticketId: '1',
    },
    {
      ticketCreatedAt: '2022-06-12T00:49:43.365Z',
      ticketName: 'Licensed Frozen Pants',
      ticketAvatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/716.jpg',
      ticketType: false,
      ticketPrice: '927.00',
      ticketAvailable: 71212,
      ticketDescription:
        'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
      ticketCity: 'North Caylaborough',
      ticketData: '2028-04-29T19:43:00.284Z',
      ticketOnline: false,
      ticketId: '2',
    },
    {
      ticketCreatedAt: '2022-06-12T10:59:24.972Z',
      ticketName: 'Sleek Wooden Pants',
      ticketAvatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1122.jpg',
      ticketType: true,
      ticketPrice: '747.00',
      ticketAvailable: 58538,
      ticketDescription:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      ticketCity: 'Samirmouth',
      ticketData: '2020-06-07T23:21:25.268Z',
      ticketOnline: true,
      ticketId: '3',
    },
    {
      ticketCreatedAt: '2022-06-12T04:08:25.195Z',
      ticketName: 'Gorgeous Frozen Fish',
      ticketAvatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/63.jpg',
      ticketType: false,
      ticketPrice: '921.00',
      ticketAvailable: 33398,
      ticketDescription:
        'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
      ticketCity: 'Cary',
      ticketData: '2095-08-23T23:17:33.637Z',
      ticketOnline: false,
      ticketId: '4',
    },
    {
      ticketCreatedAt: '2022-06-12T10:31:47.331Z',
      ticketName: 'Luxurious Rubber Computer',
      ticketAvatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/892.jpg',
      ticketType: true,
      ticketPrice: '559.00',
      ticketAvailable: 36759,
      ticketDescription:
        'New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016',
      ticketCity: 'Altadena',
      ticketData: '2035-11-06T10:23:39.732Z',
      ticketOnline: false,
      ticketId: '5',
    },
    {
      ticketCreatedAt: '2022-06-12T03:07:06.769Z',
      ticketName: 'Elegant Plastic Towels',
      ticketAvatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/407.jpg',
      ticketType: true,
      ticketPrice: '786.00',
      ticketAvailable: 61309,
      ticketDescription:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      ticketCity: 'East Zack',
      ticketData: '2051-04-04T15:07:53.951Z',
      ticketOnline: true,
      ticketId: '6',
    },
    {
      ticketCreatedAt: '2022-06-12T04:33:10.518Z',
      ticketName: 'Electronic Concrete Shirt',
      ticketAvatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/950.jpg',
      ticketType: false,
      ticketPrice: '200.00',
      ticketAvailable: 15246,
      ticketDescription:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      ticketCity: 'Boise City',
      ticketData: '2035-01-12T21:58:26.405Z',
      ticketOnline: true,
      ticketId: '7',
    },
    {
      ticketCreatedAt: '2022-06-11T14:01:44.296Z',
      ticketName: 'Small Soft Shirt',
      ticketAvatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1072.jpg',
      ticketType: true,
      ticketPrice: '597.00',
      ticketAvailable: 78060,
      ticketDescription:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      ticketCity: 'Vandervortchester',
      ticketData: '2099-11-23T07:02:23.176Z',
      ticketOnline: false,
      ticketId: '8',
    },
    {
      ticketCreatedAt: '2022-06-11T15:42:03.416Z',
      ticketName: 'Sleek Fresh Keyboard',
      ticketAvatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1192.jpg',
      ticketType: false,
      ticketPrice: '772.00',
      ticketAvailable: 71691,
      ticketDescription:
        'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
      ticketCity: 'East Florencio',
      ticketData: '2080-11-24T16:20:02.699Z',
      ticketOnline: true,
      ticketId: '9',
    },
    {
      ticketCreatedAt: '2022-06-12T10:02:47.842Z',
      ticketName: 'Elegant Concrete Pants',
      ticketAvatar:
        'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1087.jpg',
      ticketType: true,
      ticketPrice: '881.00',
      ticketAvailable: 42220,
      ticketDescription:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      ticketCity: 'South Johnnie',
      ticketData: '2038-11-08T21:04:26.894Z',
      ticketOnline: false,
      ticketId: '10',
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table arial-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {TableTest.map((ticketsRow) => (
            <TableRow
              key={ticketsRow.ticketId}
              sx={{
                '&:last-child td, &:last-child th': {
                  border: 0,
                },
              }}
            >
              <TableCell>{ticketsRow.ticketId}</TableCell>
              <TableCell>{ticketsRow.ticketName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;
