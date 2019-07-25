import xmltojson from "xmltojson";
import { UserAgentApplication, AuthenticationParameters } from "msal";

export interface ContainerData {
  EnumerationResults: {
    Blobs: {
      BlobPrefix: {
        Name: {
          _text: string;
        }[];
      }[];
    }[];
  }[];
}

export interface LoginData {
  accessToken: string;
  name: string;
}

export const getBlobFolders = async (
  accessToken: string
): Promise<string[]> => {
  const url =
    "https://samskarstorage.blob.core.windows.net/samskar-se?restype=container&comp=list&delimiter=/";

  const response = await fetch(url, {
    headers: {
      Authorization: "Bearer " + accessToken,
      "x-ms-version": "2017-11-09"
    }
  });
  if (!response.ok) throw new Error();

  const json = xmltojson.parseString(
    await response.text(),
    {}
  ) as ContainerData;
  return transformContainerData(json);
};

export const getLoginData = async (): Promise<LoginData> => {
  const authenticationParameters: AuthenticationParameters = {
    scopes: ["https://storage.azure.com/user_impersonation"]
  };

  try {
    const response = await userAgentApplication.acquireTokenSilent(
      authenticationParameters
    );
    return { accessToken: response.accessToken, name: response.account.name };
  } catch {
    const response = await userAgentApplication.loginPopup(
      authenticationParameters
    );
    return {
      accessToken: response.accessToken,
      name: response.account.name
    };
  }
};

const transformContainerData = (containerData: ContainerData): string[] =>
  containerData.EnumerationResults[0].Blobs[0].BlobPrefix.map(blobPrefix =>
    blobPrefix.Name[0]._text.replace("/", "")
  );

const userAgentApplication = new UserAgentApplication({
  auth: {
    clientId: "75a0a84b-3082-4a1c-9bdd-c4652ef3dbe4",
    authority:
      "https://login.microsoftonline.com/51f829d7-e997-4ba6-ab64-0797bcb49176",
    redirectUri: "http://localhost:3000/"
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true
  }
});
