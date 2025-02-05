import type {
    ChatAgent,
} from './types';
import {
    agentConfigFieldGetter,
    createAgentEnable,
    createAgentModel,
    createAgentModelList,
    createOpenAIRequest,
    defaultOpenAIRequestBuilder,
} from '#/agent/openai_compatibility';
import { getAgentUserConfigFieldName } from './utils';

export class Mistral implements ChatAgent {
    readonly name = 'mistral';
    readonly modelKey = getAgentUserConfigFieldName('MISTRAL_CHAT_MODEL');

    readonly fieldGetter = agentConfigFieldGetter(
        'MISTRAL_API_BASE',
        'MISTRAL_API_KEY',
        'MISTRAL_CHAT_MODEL',
        'MISTRAL_CHAT_MODELS_LIST',
    );

    readonly enable = createAgentEnable(this.fieldGetter);
    readonly model = createAgentModel(this.fieldGetter);
    readonly modelList = createAgentModelList(this.fieldGetter);
    readonly request = createOpenAIRequest(defaultOpenAIRequestBuilder(this.fieldGetter));
}
