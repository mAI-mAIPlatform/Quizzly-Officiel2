export type AIModel = {
  id: number;
  name: string;
  namespace: string;
  description: string;
  model: string;
  modelProvider: string;
  isActive: boolean;
  isDefault: boolean;
};

export const AI_MODELS: AIModel[] = [
  {
    id: 40,
    name: "DeepSeek-V3.2",
    namespace: "azure",
    description: "Latest frontier model with improvements across knowledge, reasoning and coding",
    model: "DeepSeek-V3.2",
    modelProvider: "DeepSeek",
    isActive: true,
    isDefault: false,
  },
  {
    id: 42,
    name: "Kimi-K2.5",
    namespace: "azure",
    description: "Open-source, multimodal model from Moonshot AI built for agentic workflows",
    model: "Kimi-K2.5",
    modelProvider: "Kimi",
    isActive: true,
    isDefault: false,
  },
  {
    id: 43,
    name: "Mistral-Large-3",
    namespace: "azure",
    description: "Large Mistral model deployed on Azure OpenAI for advanced chat and reasoning tasks.",
    model: "Mistral-Large-3",
    modelProvider: "Mistral",
    isActive: true,
    isDefault: false,
  },
  {
    id: 45,
    name: "gpt-5.4-mini",
    namespace: "openai",
    description: "Smaller frontier agentic coding model.",
    model: "gpt-5.4-mini",
    modelProvider: "openai",
    isActive: true,
    isDefault: false,
  },
  {
    id: 52,
    name: "gpt-5.4-nano",
    namespace: "openai",
    description: "Ultra-compact model for very fast quiz generation.",
    model: "gpt-5.4-nano",
    modelProvider: "openai",
    isActive: true,
    isDefault: false,
  },
  {
    id: 53,
    name: "gpt-oss-120b",
    namespace: "openai",
    description: "Open-weight large model tuned for robust reasoning tasks.",
    model: "gpt-oss-120b",
    modelProvider: "openai",
    isActive: true,
    isDefault: false,
  },
  {
    id: 34,
    name: "gpt-5.2",
    namespace: "openai",
    description: "Latest frontier model with improvements across knowledge, reasoning and coding",
    model: "gpt-5.2",
    modelProvider: "openai",
    isActive: true,
    isDefault: false,
  },
  {
    id: 35,
    name: "gpt-5.1",
    namespace: "openai",
    description: "Broad world knowledge with strong general reasoning.",
    model: "gpt-5.1",
    modelProvider: "openai",
    isActive: true,
    isDefault: false,
  },
  {
    id: 37,
    name: "gpt-5",
    namespace: "openai",
    description: "Broad world knowledge with strong general reasoning.",
    model: "gpt-5",
    modelProvider: "openai",
    isActive: true,
    isDefault: false,
  },
  {
    id: 41,
    name: "gpt-5.4",
    namespace: "openai",
    description: "Latest frontier agentic coding model.",
    model: "gpt-5.4",
    modelProvider: "openai",
    isActive: true,
    isDefault: true,
  },
];

export const ACTIVE_AI_MODELS = AI_MODELS.filter((model) => model.isActive);
// Sécurise le défaut: on force GPT-5.4 si présent/actif, sinon fallback sur le 1er actif.
export const DEFAULT_AI_MODEL = ACTIVE_AI_MODELS.some((model) => model.model === "gpt-5.4")
  ? "gpt-5.4"
  : (ACTIVE_AI_MODELS.find((model) => model.isDefault)?.model ?? ACTIVE_AI_MODELS[0]?.model ?? "gpt-5.4");
