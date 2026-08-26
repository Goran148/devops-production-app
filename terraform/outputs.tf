output "instance_public_ip" {
  description = "Public IP address pf the application server"
  value       = aws_instance.app.public_ip
}

output "instance_public_dns" {
  description = "Public DNS name of the application server"
  value       = aws_instance.app.public_dns
}