using JWT;
using JWT.Algorithms;
using JWT.Exceptions;
using JWT.Serializers;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;

namespace CSM.Models
{
    public class JWTTokenizer
    {
        public string Token { get; set; }

        public string GenerateToken(string data, TimeSpan expirationTime)
        {
            var payload = new Dictionary<string, object>
            {
                { "claim1", 0 },
                { "claim2", data },
                { "time", DateTimeOffset.UtcNow.ToUnixTimeSeconds()},
                { "exp", (long)DateTime.UtcNow.Add(expirationTime).Subtract(new DateTime(1970, 1, 1)).TotalSeconds}
            };
            X509Certificate2 certificate = new X509Certificate2();

            IJwtAlgorithm algorithm = new RS256Algorithm(certificate);
            IJsonSerializer serializer = new JsonNetSerializer();
            IBase64UrlEncoder urlEncoder = new JwtBase64UrlEncoder();
            IJwtEncoder encoder = new JwtEncoder(algorithm, serializer, urlEncoder);
            var privateKey = certificate.GetRSAPrivateKey();
            var token = encoder.Encode(payload, privateKey, null);
            return token;
        }

        public string validateToken(string token)
        {
            try
            {
                X509Certificate2 certificate = new X509Certificate2();
                IJsonSerializer serializer = new JsonNetSerializer();
                IDateTimeProvider provider = new UtcDateTimeProvider();
                IJwtValidator validator = new JwtValidator(serializer, provider);
                IBase64UrlEncoder urlEncoder = new JwtBase64UrlEncoder();
                IJwtAlgorithm algorithm = new RS256Algorithm(certificate);
                IJwtDecoder decoder = new JwtDecoder(serializer, validator, urlEncoder, algorithm);
                var json = decoder.Decode(token);
                if (json != null)
                {
                    return "VALID";
                }
                else
                {
                    return "INVALID";
                }
            }
            catch (TokenNotYetValidException)
            {
                Console.WriteLine("Token is not valid yet");
                return "INVALID";
            }
            catch (TokenExpiredException)
            {
                Console.WriteLine("Token has expired");
                return "EXPIRED";
            }
            catch (SignatureVerificationException)
            {
                Console.WriteLine("Token has invalid signature");
                return "INVALID";
            }
        }
    }
}