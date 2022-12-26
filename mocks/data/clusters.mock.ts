import { ListClusterAPIResponse } from "~/apps/@fd-storage/types";
export const clusters: ListClusterAPIResponse = {
  cluster: [
    {
      clusterName: "lab-ei4.cluster7",
      clusterType: "CT_NVMESH",
      clusterState: "CS_PROD",
      clusterEnv: "CE_REGULAR",
      description: "",
      username: "admin",
      secretUrn: "urn:li:kmsSecret:ec2b5c6d-ca49-4128-ba23-9387bdce3bde",
      fabric: "ei4",
      totalCapacity: "31841628979200",
      availableCapacity: "31781630509056",
      clusterScope: "CSC_FABRIC",
      connectivityType: "CC_RDMA",
      managementNodes: [
        {
          name: "lor1-0004176.int.linkedin.com",
          ip: "10.190.240.117",
          leafZone: "lor1.d.513.access_02",
          port: 4000,
          disks: [],
          status: "STATUS_HEALTHY",
        },
        {
          name: "lor1-0004226.int.linkedin.com",
          ip: "10.190.241.250",
          leafZone: "lor1.d.813.access_02",
          port: 4000,
          disks: [],
          status: "STATUS_HEALTHY",
        },
      ],
      targetNodes: [
        {
          name: "lor1-0004176.int.linkedin.com",
          ip: "10.190.240.117",
          leafZone: "lor1.d.513.access_02",
          port: 4000,
          disks: [],
          status: "STATUS_HEALTHY",
        },
        {
          name: "lor1-0004194.int.linkedin.com",
          ip: "10.190.240.247",
          leafZone: "lor1.d.613.access_02",
          port: 0,
          disks: [],
          status: "STATUS_HEALTHY",
        },
        {
          name: "lor1-0004195.int.linkedin.com",
          ip: "10.190.240.241",
          leafZone: "lor1.d.613.access_02",
          port: 0,
          disks: [],
          status: "STATUS_HEALTHY",
        },
        {
          name: "lor1-0004226.int.linkedin.com",
          ip: "10.190.241.250",
          leafZone: "lor1.d.813.access_02",
          port: 4000,
          disks: [],
          status: "STATUS_HEALTHY",
        },
        {
          name: "lor1-0004227.int.linkedin.com",
          ip: "10.190.241.234",
          leafZone: "lor1.d.813.access_02",
          port: 0,
          disks: [],
          status: "STATUS_HEALTHY",
        },
      ],
      clientNodes: [],
      customers: ["default_group"],
      targetClasses: [],
      driveClasses: [],
      owners: [],
    },
    {
      clusterName: "lab-ei4.cluster8",
      clusterType: "CT_NVMESH",
      clusterState: "CS_PROD",
      clusterEnv: "CE_REGULAR",
      description: "",
      username: "",
      secretUrn: "",
      fabric: "ei4",
      totalCapacity: "38215461371904",
      availableCapacity: "38195461881856",
      clusterScope: "CSC_FABRIC",
      connectivityType: "CC_RDMA",
      managementNodes: [],
      targetNodes: [],
      clientNodes: [],
      customers: [],
      targetClasses: [],
      driveClasses: [],
      owners: [],
    },
    {
      clusterName: "testcluster2",
      clusterType: "CT_LINVME",
      clusterState: "CS_PROD",
      clusterEnv: "CE_REGULAR",
      description: "Lab cluster testcluster2",
      username: "",
      secretUrn: "",
      fabric: "lor1",
      totalCapacity: "12802527166464",
      availableCapacity: "12782527166464",
      clusterScope: "CSC_FABRIC",
      connectivityType: "CC_RDMA",
      managementNodes: [],
      targetNodes: [],
      clientNodes: [],
      customers: [],
      targetClasses: [],
      driveClasses: [],
      owners: [],
    },
  ],
};
