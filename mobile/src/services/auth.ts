interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'fsdgafsnglkgldfasa',
        user: {
          name: 'Douglas',
          email: 'dougphaney@hotmailcom',
        },
      });
    }, 2000);
  });
}
