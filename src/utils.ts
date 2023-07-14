import generate from "nanoid/generate";

const ALPHANUMERIC = "1234567890abcdefghijklmnopqrstuvwxyz";

export const generateKey = ({prefix = "", size = 10}: { prefix?: string, size?: number } = {}): string => {
    return prefix + generate(ALPHANUMERIC, size);
};

export const DATA_BIND_REGEX = /{{([\s\S]*?)}}/;

export const isDynamicValue = (value: string): boolean =>
    DATA_BIND_REGEX.test(value);