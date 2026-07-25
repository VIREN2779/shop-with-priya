export function isAuthorized(req: Request): boolean {
    const authHeader = req.headers.get("authorization");
    if (!authHeader?.startsWith("Basic ")) return false;

    const base64Credentials = authHeader.split(" ")[1];
    const [user, pass] = atob(base64Credentials).split(":");

    return (
        user === process.env.BASIC_AUTH_USER &&
        pass === process.env.BASIC_AUTH_PASSWORD
    );
}