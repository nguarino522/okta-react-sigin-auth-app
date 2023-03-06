export default {
    oidc: {
      issuer: 'https://dev-44019899.okta.com/oauth2/default',
      clientId: '0oa8lbovfgYERriMu5d7',
      scopes: ['openid', 'profile', 'email'],
      redirectUri: `${window.location.origin}/login/callback`
    },
    widget: {
      issuer: 'https://dev-44019899.okta.com/oauth2/default',
      clientId: '0oa8lbovfgYERriMu5d7',
      redirectUri: `${window.location.origin}/login/callback`,
      scopes: ['openid', 'profile', 'email'],
    }
  };