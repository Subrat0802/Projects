import OpenAI from 'openai';
import { OPENAI_KEY } from './constents';


const openai = new OpenAI({
  apiKey: OPENAI_KEY, 
  dangerouslyAllowBrowser: true
});

export default openai;
