//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CSM.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Role
    {
        public Role()
        {
            this.User_Info = new HashSet<User_Info>();
            this.Complaints = new HashSet<Complaint>();
        }
    
        public int role_id { get; set; }
        public string role_name { get; set; }
    
        public virtual ICollection<User_Info> User_Info { get; set; }
        public virtual ICollection<Complaint> Complaints { get; set; }
    }
}
