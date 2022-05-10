            Node Js clusturs

how to use multi core system in node js and distribute multiple incomming connections
how to communicate b/w master process and child process 

Clustur module Methods 

1 robin method running on all platform except window 
master process listen on a port , accet a new connection and distribute them across  th worker in round robin method.

2 second method 
the master process create listen socket and send it to interested workers.
the workers then accept incomming connection directly 


There are several events which we can handle during node js clusturing 

clusturing 
-online forl , message , disconnect exit etc

Methods
- Disconnect , fork etc

Properties 
-IsMaster , IsWorkr etc. 

Worker class methods , properties and Events 

-worker class 
-online , message , disconnect, Exit etc

Methods
- Disconnect , isconnected , IsDead , kill , send etc 

Properties 
-id , process etc

To know how many logicla cpus are available in our machine, we can use os modules 

os.cpus()
return array of an object containing info about each logical cpu core

os.cpus().length
return count of logicla cpus 
