export const collectLocaleFiles = async (modules) => {
    const localeFiles = {};

    for (const module of modules) {
        const { default: translations } = await module;
        Object.assign(localeFiles, translations);
    }

    return localeFiles;
};
