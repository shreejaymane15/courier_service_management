using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CSM.Models
{
    public class EmployeeData
    {
        public User_Info user { get; set; }
        public CheckToken data { get; set; }
        public string role_name { get; set; }
        public Order order { get; set; }
    }

    public class OrderData
    {
         public Order order { get; set; }
          public CheckToken data { get; set; }

        public string status{ get; set; }

    }
}