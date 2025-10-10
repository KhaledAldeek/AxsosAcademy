from django.db import models
from django.db.models import Count
class League(models.Model):
	name = models.CharField(max_length=50)
	sport = models.CharField(max_length=15)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

class Team(models.Model):
	location = models.CharField(max_length=50)
	team_name = models.CharField(max_length=50)
	league = models.ForeignKey(League, related_name="teams", on_delete = models.CASCADE)

class Player(models.Model):
	first_name = models.CharField(max_length=15)
	last_name = models.CharField(max_length=15)
	curr_team = models.ForeignKey(Team, related_name="curr_players", on_delete = models.CASCADE)
	all_teams = models.ManyToManyField(Team, related_name="all_players")


class First:
	def get_all_baseBall_leagus():
		return League.objects.filter(sport = "Baseball")

	def get_all_women_leagues():
		return League.objects.filter(name__contains="Womens'")

	def get_hockeis():
		return League.objects.filter(sport__endswith = "Hockey")

	def get_sport_other_than_football():
		return League.objects.exclude(sport = "Football")

	def get_all_conference_leagues():
		return League.objects.filter(name__contains="Conference")

	def get_all_atlantic_region():
		return League.objects.filter(name__contains = "Atlantic")

	def get_all_teams_in_dallas():
		return Team.objects.filter(location="Dallas")

	def get_all_raptors_teams():
		return Team.objects.filter(team_name = "Raptors")

	def get_all_teams_location_include_city():
		return Team.objects.filter(location__contains = "City")

	def get_all_teams_begins_with_T():
		return Team.objects.filter(team_name__startswith = "T")

	def get_all_teams_order_alphabetically_by_location():
		return Team.objects.all().order_by("location")

	def get_all_teams_order_alphabetically_by_team_name():
		return Team.objects.all().order_by("-team_name")

	def get_every_player_with_lastname_Cooper():
		return Player.objects.filter(last_name = "Cooper")

	def get_every_player_with_firstname_Joshua():
		return Player.objects.filter(first_name = "Joshua")

	def question_15():
		return Player.objects.filter(last_name = "Cooper").exclude(first_name = "Joshua")

	def question_16():
		return Player.objects.filter(models.Q(first_name = "Alexander") | models.Q(first_name = "Wyatt"))
	
class Second:

	def question_1():
		return Team.objects.filter(league__name="Atlantic Soccer Conference")

	def question_2():
		return Player.objects.filter(curr_team__team_name="Penguins", curr_team__location="Boston")

	def question_3():
		return Player.objects.filter(curr_team__league__name="International Collegiate Baseball Conference")

	def question_4():
		return Player.objects.filter(models.Q(curr_team__league__name="American Conference of Amateur Football") & models.Q(last_name="Lopez"))

	def question_5():
		return Player.objects.filter(curr_team__league__sport="Football")

	def question_6():
		return Team.objects.filter(curr_players__first_name="Sophia").distinct()

	def question_7():
		return League.objects.filter(teams__curr_players__first_name="Sophia").distinct()

	def question_8():
		return Player.objects.filter(last_name="Flores").exclude(curr_team__team_name="Roughriders", curr_team__location="Washington")

	def question_9():
		return Team.objects.filter(all_players__first_name="Samuel", all_players__last_name="Evans").distinct()

	def question_10():
		return Player.objects.filter(all_teams__team_name="Tiger-Cats", all_teams__location="Manitoba").distinct()

	def question_11():
		return Player.objects.filter(all_teams__team_name="Vikings", all_teams__location="Wichita").exclude(curr_team__team_name="Vikings", curr_team__location="Wichita").distinct()

	def question_12():
		return Team.objects.filter(all_players__first_name="Jacob", all_players__last_name="Gray").exclude(curr_players__first_name="Jacob", curr_players__last_name="Gray", team_name="Colts", location="Oregon").distinct()

	def question_13():
		return Player.objects.filter(all_teams__league__name="Atlantic Federation of Amateur Baseball Players", first_name="Joshua").distinct()

	def question_14():
		return Team.objects.annotate(num_players= Count("all_players")).filter(num_players__gte=12)

	def question_15():
		return Player.objects.annotate(team_count= Count("all_teams")).order_by("team_count")

	