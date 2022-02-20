import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './oscar2022.png';
import monkeys from './spidermeme.png';

import {Container, Button, Form} from 'react-bootstrap';

import Amplify from "aws-amplify";
import { API} from 'aws-amplify';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

async function addEntry(event) {
  if (formState.name === '') {
    alert('Your name is a required field.');;
    return;
  }
  if (formState.email === '') {
    alert('Your email address is a required field.');;
    return;
  }
  event.target.disabled = true;
  const data = {
    body: {
      name: formState.name,
      email: formState.email,
      bestactor: formState.bestactor,
      bestsuppactor: formState.bestsuppactor,
      bestactress: formState.bestactress,
      bestsuppactress: formState.bestsuppactress,
      animated: formState.animated,
      documentary: formState.documentary,
      international: formState.international,
      musicscore: formState.musicscore,
      musicsong: formState.musicsong,
      writingadapted: formState.writingadapted,
      writingoriginal: formState.writingoriginal,
      director: formState.director,
      bestpicture: formState.bestpicture,
      deadpeople: formState.deadpeople
    }
  };

  console.log(data);
  const apiData = await API.post('oscarsapi', '/entry', data);
  console.log({ apiData });
  event.target.innerText="Saved!";
  alert('Entry saved');
}

const formState = { name: '', email: '', bestactor: '', bestsuppactor: '', bestactress: '', bestsuppactress: '', animated: '', documentary: '', international: '', musicscore: '', musicsong: '', writingadapted: '', writingoriginal: '', director: '', bestpicture: '', deadpeople: '' };

function updateFormState(key, value) {
  formState[key] = value;
}

function App() {
  return (
    <Container>
      <div>
        <div align="center">
        <p><img src={logo} alt="Web-Goddess Oscar Contest 2022" className="logo" /></p>
        </div>
        <br/>
        <p><strong>The Rules:</strong></p>
        <ol><li> Your name and email address are required. Your email address is only used to contact the winner for shipping information, then all data will be deleted.</li>
        <li> You can enter more than once if you like, but only your final entry will count.</li>
        <li> Once all the categories are announced, the winner will be the person whose final entry predicted the most categories correctly.</li>
        <li> In the event of a tie, the tie-breaker will be whoever comes closest to the number of celebrities featured in the "In Memoriam" reel.</li>
        <li> If that still doesn't break the tie, the winner will be whoever's entry was submitted first.</li>
        <li> The winner will receive a set of three Spider-Monkeys so you can act out scenes from <em>Spider-Man: No Way Home</em> (or the <a href="https://knowyourmeme.com/memes/spider-man-pointing-at-spider-man">meme</a>!). Scroll down to the bottom to see them, or head to <a href="https://www.web-goddess.org/archive/23308">my blog</a> for details.</li>
        <li> The contest is open for entries until a few hours before the Academy Awards on Sunday, March 27th. I'll announce the winner the next morning when I get up and calculate the scores.</li>
        <li> If the winner's email address is invalid or they don't respond within a week, I reserve the right to send the prize to the next highest scoring entry.</li>
        <li> It's absolutely free to enter, and I'll bear the cost of shipping the monkeys to you. Just pay it forward sometime, okay?</li></ol>
        <Form>
          <Form.Group controlId="Form.Name">
            <Form.Label>Name: *</Form.Label>
            <Form.Control placeholder="Name" onChange={e => updateFormState('name', e.target.value)} />
          </Form.Group>
          <Form.Group controlId="Form.Email">
            <Form.Label>Email: *</Form.Label>
            <Form.Control placeholder="Email" onChange={e => updateFormState('email', e.target.value)} />
          </Form.Group>
          <Form.Group controlId="Form.BestActor">
            <Form.Label>Actor in a Leading Role: </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('bestactor', e.target.value)} >
              <option>Please select...</option>
              <option>Javier Bardem, Being the Ricardos</option>
              <option>Benedict Cumberbatch, The Power of the Dog</option>
              <option>Andrew Garfield, tick, tick...BOOM!</option>
              <option>Will Smith, King Richard</option>
              <option>Denzel Washington, The Tragedy of Macbeth</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestSuppActor">
            <Form.Label>Actor in a Supporting Role: </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('bestsuppactor', e.target.value)} >
              <option>Please select...</option>
              <option>Ciarán Hinds, Belfast</option>
              <option>Troy Kotsur, CODA</option>
              <option>Jesse Plemons, The Power of the Dog</option>
              <option>J.K. Simmons, Being the Ricardos</option>
              <option>Kodi Smit-McPhee, The Power of the Dog</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestActress">
            <Form.Label>Actress in a Leading Role: </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('bestactress', e.target.value)} >
              <option>Please select...</option>
              <option>Jessica Chastain, The Eyes of Tammy Faye</option>
              <option>Olivia Colman, The Lost Daughter</option>
              <option>Penélope Cruz, Parallel Mothers</option>
              <option>Nicole Kidman, Being the Ricardos</option>
              <option>Kristen Stewart, Spencer</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestSuppActress">
            <Form.Label>Actress in a Supporting Role: </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('bestsuppactress', e.target.value)} >
              <option>Please select...</option>
              <option>Jessie Buckley, The Lost Daughter</option>
              <option>Ariana DeBose, West Side Story</option>
              <option>Judi Dench, Belfast</option>
              <option>Kirsten Dunst, The Power of the Dog</option>
              <option>Aunjanue Ellis, King Richard</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestAnimated">
            <Form.Label>Animated Film: </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('animated', e.target.value)} >
              <option>Please select...</option>
              <option>Encanto</option>
              <option>Flee</option>
              <option>Luca</option>
              <option>The Mitchells vs. the Machines</option>
              <option>Raya and the Last Dragon</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestDocumentary">
            <Form.Label>Documentary (Feature): </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('documentary', e.target.value)} >
              <option>Please select...</option>
              <option>Ascension</option>
              <option>Attica</option>
              <option>Flee</option>
              <option>Summer of Soul (...Or, When the Revolution Could Not Be Televised)</option>
              <option>Writing with Fire</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestInternational">
            <Form.Label>International Feature Film: </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('international', e.target.value)} >
              <option>Please select...</option>
              <option>Drive My Car</option>
              <option>Flee</option>
              <option>The Hand of God</option>
              <option>Lunana: A Yak in the Classroom</option>
              <option>The Worst Person in the World</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestMusicScore">
            <Form.Label>Music (Score): </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('musicscore', e.target.value)} >
              <option>Please select...</option>
              <option>Don’t Look Up</option>
              <option>Dune</option>
              <option>Encanto</option>
              <option>Parallel Mothers</option>
              <option>The Power of the Dog</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestMusicSong">
            <Form.Label>Music (Original Song): </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('musicsong', e.target.value)} >
              <option>Please select...</option>
              <option>“Be Alive” from King Richard</option>
              <option>“Dos Oruguitas” from Encanto</option>
              <option>“Down To Joy” from Belfast</option>
              <option>“No Time To Die” from No Time to Die</option>
              <option>“Somehow You Do” from Four Good Days</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestWritingAdapted">
            <Form.Label>Writing (Adapted Screenplay): </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('writingadapted', e.target.value)} >
              <option>Please select...</option>
              <option>CODA</option>
              <option>Drive My Car</option>
              <option>Dune</option>
              <option>The Lost Daughter</option>
              <option>The Power of the Dog</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestWritingOriginal">
            <Form.Label>Writing (Original Screenplay): </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('writingoriginal', e.target.value)} >
              <option>Please select...</option>
              <option>Belfast</option>
              <option>Don’t Look Up</option>
              <option>King Richard</option>
              <option>Licorice Pizza</option>
              <option>The Worst Person in the World</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestDirector">
            <Form.Label>Director: </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('director', e.target.value)} >
              <option>Please select...</option>
              <option>Belfast</option>
              <option>Drive My Car</option>
              <option>Licorice Pizza</option>
              <option>The Power of the Dog</option>
              <option>West Side Story</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.BestPicture">
            <Form.Label>Best Picture: </Form.Label>
            <Form.Control as="select" onChange={e => updateFormState('bestpicture', e.target.value)} >
              <option>Please select...</option>
              <option>Belfast</option>
              <option>CODA</option>
              <option>Don’t Look Up</option>
              <option>Drive My Car</option>
              <option>Dune</option>
              <option>King Richard</option>
              <option>Licorice Pizza</option>
              <option>Nightmare Alley</option>
              <option>The Power of the Dog</option>
              <option>West Side Story</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="Form.InMemoriam">
            <Form.Label>Tiebreaker: how many people will be featured in the "In Memoriam" reel of Academy members who passed away last year?</Form.Label>
            <Form.Control placeholder="Number" onChange={e => updateFormState('deadpeople', e.target.value)} />
          </Form.Group>
          <Button onClick={addEntry}>Submit your entry</Button>
        </Form>
        &nbsp;
      </div>
      <div align="center">
      <p><img src={monkeys} alt="Spider-Monkeys" className="monkeys" /></p>
      </div>
    </Container>
  );
}


export default App;
