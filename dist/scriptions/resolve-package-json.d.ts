export declare type PackageJsonInfo = {
    packageJson: {
        scriptions: {
            [key: string]: string;
        };
        scripts: {
            [key: string]: string;
        };
        [key: string]: any;
    };
    fullPathToPackageJson: string;
};
export declare function resolvePackageJson(): PackageJsonInfo;
//# sourceMappingURL=resolve-package-json.d.ts.map