import { Configuration } from 'openai';
export const configureOpenAi = () => {
    const conifg = new Configuration({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPENAI_ORAGANIZATION,
    });
    return conifg;
};
//# sourceMappingURL=openai-config.js.map