import { configuration } from "openai";

export function configureOpenAI = () => {
    const config = new configuration({
        apikey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPENAI_ORAGANIZATION_ID,

    });
}